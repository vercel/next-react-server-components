export default function Logo() {
  return (
    <>
      <span className="logo-n">N</span>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .logo-n {
        border: 1px solid #fff;
        display: inline-block;
        color: #fff;
        font-weight: bold;
        font-size: 11px;
        padding: 5px 8px;
      }
    `,
        }}
      />
    </>
  )
}
